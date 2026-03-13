import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const RSS_PROXY = "https://api.rss2json.com/v1/api.json?rss_url=";
const RSS_URL = "https://80.lv/feed";
const CACHE_KEY = "veille_80lv";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// --- Utils ---
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
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
const NewsCard = ({ title, link, pubDate, description }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div
      className={twMerge(
        "p-4 rounded-xl border border-white/10 bg-slate-800",
        "transition-transform duration-300 ease-in-out hover:scale-105 hover:border-orange-600"
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <span>📰</span>
        <div>
          <p className="text-sm font-medium text-white">80 Level</p>
          <p className="text-xs text-white/40">{formatDate(pubDate)}</p>
        </div>
      </div>
      <h3 className="text-sm font-semibold text-white line-clamp-2">{title}</h3>
      <p className="text-xs text-white/60 mt-1 line-clamp-2">
        {truncateText(cleanHTML(description), 100)}
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

  const fetchFeed = async () => {
    try {
      setError(null);
      const response = await fetch(`${RSS_PROXY}${encodeURIComponent(RSS_URL)}`);
      const data = await response.json();

      if (data.status === "ok") {
        const filtered = data.items.filter((item) => item.categories?.includes("News"));
        const latestNews = filtered.slice(0, 9);
        setNews(latestNews);
        setLastUpdate(new Date());

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ timestamp: Date.now(), data: latestNews })
        );
      }
    } catch (err) {
      setError("Impossible de charger les actualités.");
      console.error(err);
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
    fetchFeed();
    const interval = setInterval(fetchFeed, CACHE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6">
      <h1 className="text-3xl font-bold text-amber-500 text-center">Veille Technologique</h1>
      <p className="mt-2 text-center text-slate-400">
        Actualités Motion Capture & 3D issues de 80 Level
      </p>

      {lastUpdate && (
        <p className="mt-2 text-center text-xs text-slate-500">
          Dernière mise à jour : {lastUpdate.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
        </p>
      )}

      {loading && <p className="mt-6 text-center text-slate-400">Chargement des actualités...</p>}
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