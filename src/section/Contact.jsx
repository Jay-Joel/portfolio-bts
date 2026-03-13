import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);

    // Clé Web3Forms depuis le .env
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    );

    // Personnalisation email reçu
    formData.append(
      "subject",
      "Nouveau message depuis mon portfolio"
    );

    formData.append(
      "from_name",
      "Portfolio - Ton Prénom"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Erreur réseau");
      }

      const data = await response.json();

      if (data.success) {
        setResult("success");
        event.target.reset();
      } else {
        setResult("error");
      }
    } catch (error) {
      console.error("Erreur envoi :", error);
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-16">
      <div className="max-w-xl w-full">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-amber-500">
            Contactez-moi
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Que ce soit pour un projet web, une collaboration ou une opportunité d'alternance,
            n'hésitez pas à me contacter.
          </p>
        </div>

        {/* Formulaire */}
        <form
          onSubmit={onSubmit}
          className="space-y-5 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur"
        >
          {/* Nom */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Albert Camus"
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-amber-500 focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="albert@email.com"
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-amber-500 focus:outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Votre message..."
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-amber-500 focus:outline-none transition"
            ></textarea>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
              ${
                isSubmitting
                  ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                  : "bg-amber-500 hover:bg-amber-400 text-black hover:shadow-lg hover:shadow-amber-500/30"
              }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Envoi en cours...
              </span>
            ) : (
              "Envoyer le message"
            )}
          </button>

          {/* Messages de statut */}
          {result === "success" && (
            <div className="p-3 rounded-xl bg-green-900/30 border border-green-500/30 text-green-400 text-center text-sm">
              ✅ Message envoyé avec succès ! Je vous répondrai rapidement.
            </div>
          )}

          {result === "error" && (
            <div className="p-3 rounded-xl bg-red-900/30 border border-red-500/30 text-red-400 text-center text-sm">
              ❌ Une erreur est survenue. Veuillez réessayer.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;