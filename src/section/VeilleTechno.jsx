import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const RSS_PROXY = "https://api.rss2json.com/v1/api.json?rss_url=";

// --- Flux RSS ---
const FEEDS = [
  {
    name: "Unreal Engine",
    url: "https://www.unrealengine.com/en-US/rss",
    icon: "🟣",
  },
  {
    name: "Unity",
    url: "https://blog.unity.com/feed",
    icon: "⚪",
  },
  {
    name: "Godot",
    url: "https://godotengine.org/rss.xml",
    icon: "🔵",
  },
];

const CACHE_KEY = "veille_game_engines";
const CACHE_DURATION = 5 * 60 * 1000;

// --- Utils ---
const formatDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  });
};

const cleanHTML = (html) => {
  if (!html) return "";

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  return doc.body.textContent || "";
};

const truncateText = (text, maxLength) => {
  if (!text) return "";

  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

// --- Card ---
const NewsCard = ({ title, link, pubDate, description, source, icon }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div
      className={twMerge(
        "p-4 rounded-xl border border-white/10 bg-slate-800",
        "transition-transform duration-300 ease-in-out",
        "hover:scale-105 hover:border-orange-600",
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{icon}</span>

        <div>
          <p className="text-sm font-medium text-white">{source}</p>

          <p className="text-xs text-white/40">{formatDate(pubDate)}</p>
        </div>
      </div>

      <h3 className="text-sm font-semibold text-white line-clamp-2">{title}</h3>

      <p className="text-xs text-white/60 mt-1 line-clamp-3">
        {truncateText(cleanHTML(description), 120)}
      </p>
    </div>
  </a>
);

// --- Main ---
export default function VeilleTechno() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  const fetchFeeds = async () => {
    try {
      setError(null);

      const requests = FEEDS.map(async (feed) => {
        const response = await fetch(
          `${RSS_PROXY}${encodeURIComponent(feed.url)}`,
        );

        const data = await response.json();

        if (data.status === "ok") {
          return data.items.slice(0, 4).map((item) => ({
            ...item,
            source: feed.name,
            icon: feed.icon,
          }));
        }

        return [];
      });

      const results = await Promise.all(requests);

      const mergedNews = results
        .flat()
        .sort(
          (a, b) =>
            new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
        )
        .slice(0, 9);

      setNews(mergedNews);
      setLastUpdate(new Date());

      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          timestamp: Date.now(),
          data: mergedNews,
        }),
      );
    } catch (err) {
      console.error(err);
      setError("Impossible de charger les actualités.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);

    if (cached) {
      const { timestamp, data } = JSON.parse(cached);

      if (Date.now() - timestamp < CACHE_DURATION) {
        setNews(data);
        setLastUpdate(new Date(timestamp));
        setLoading(false);
        return;
      }
    }

    fetchFeeds();

    const interval = setInterval(fetchFeeds, CACHE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6">
      <h1 className="text-3xl font-bold text-amber-500 text-center">
        Veille Technologique
      </h1>

      <p className="mt-2 text-center text-slate-400">
        Actualités Unreal Engine, Unity & Godot
      </p>

      {lastUpdate && (
        <p className="mt-2 text-center text-xs text-slate-500">
          Dernière mise à jour :{" "}
          {lastUpdate.toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      )}

      {loading && (
        <p className="mt-6 text-center text-slate-400">
          Chargement des actualités...
        </p>
      )}

      {error && <p className="mt-6 text-center text-red-400">{error}</p>}

      {!loading && !error && news.length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.guid || item.link} {...item} />
          ))}
        </div>
      )}
    </section>
  );
}
