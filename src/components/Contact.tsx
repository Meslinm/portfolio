import { useState } from "react";
import Title from "./Title";
import { Mail, Copy, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const EMAIL = "hounyodeborah@gmail.com";
// Numéro WhatsApp avec l'indicatif, sans + ni espaces.
// Laisse vide si tu ne veux pas de WhatsApp : le bouton n'apparaîtra pas.
const WHATSAPP = "2290194831134";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div id="Contact" className="scroll-mt-24 mt-10 px-4">
      <Title title="Contact" />

      <div className="max-w-xl mx-auto bg-base-300 p-8 rounded-xl shadow-lg text-center space-y-6">
        <p>
          Un projet, une collaboration ou une opportunité ? Écrivez-moi, je vous
          réponds avec plaisir.
        </p>

        <div className="flex items-center justify-center gap-2 text-accent font-semibold break-all">
          <Mail className="w-5 h-5 shrink-0" />
          {EMAIL}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            <Mail className="w-5 h-5" />
            Écrire un e-mail
          </a>

          <button onClick={copyEmail} className="btn btn-neutral">
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
            {copied ? "Adresse copiée" : "Copier l'adresse"}
          </button>

          {WHATSAPP && (
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;