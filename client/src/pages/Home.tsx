import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Eye,
  Instagram,
  MapPin,
  Menu,
  Shield,
  ShieldCheck,
  Smartphone,
  Star,
  Sparkles,
  Tablet,
  Watch,
  X,
} from "lucide-react";

// Set VITE_WHATSAPP_NUMBER in Netlify (digits only, including country code).
// Without it, the link opens WhatsApp with the message ready for the visitor to choose a contact.
const BUSINESS_WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER ?? "83998766447").replace(/\D/g, "");
const WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre a blindagem da BlindMax para o meu dispositivo.";
const WHATSAPP_TEXT = encodeURIComponent(WHATSAPP_MESSAGE);
const WHATSAPP_URL = BUSINESS_WHATSAPP_NUMBER
  ? `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`
  : `https://api.whatsapp.com/send?text=${WHATSAPP_TEXT}`;
const INSTAGRAM_URL = (import.meta.env.VITE_INSTAGRAM_URL ?? "https://www.instagram.com/blindmaxpro/").trim();
const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663983230544/NjlwBtkOWblFWYtN.webp";

const navigation = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "O que blindamos", href: "#solucoes" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "FAQ", href: "#faq" },
];

const faqs = [
  {
    question: "A blindagem altera a sensibilidade do toque do celular?",
    answer:
      "A proposta é preservar a experiência original do aparelho. O resultado pode variar conforme o dispositivo e a solução aplicada; informe o modelo para que a equipe confirme os detalhes antes do agendamento.",
  },
  {
    question: "Quanto tempo demora o processo de aplicação?",
    answer:
      "O tempo depende do aparelho e do tipo de proteção escolhida. Chame a equipe pelo WhatsApp com o modelo do seu dispositivo para receber uma estimativa antes de agendar.",
  },
  {
    question: "A BlindMax atende a domicílio ou em ponto físico em João Pessoa?",
    answer:
      "O atendimento é voltado a João Pessoa e região. Consulte pelo WhatsApp a disponibilidade, o formato de atendimento e o endereço antes de se deslocar.",
  },
  {
    question: "Quais marcas de smartphones são compatíveis?",
    answer:
      "A compatibilidade depende do modelo e da solução disponível. Consulte a equipe sobre iPhone, Samsung e outros dispositivos informando o modelo exato.",
  },
];

function WhatsAppMark({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="whatsapp-mark"
    >
      <path
        d="M20.1 11.8a8.1 8.1 0 0 1-12 7.1L4 20l1.1-4a8.1 8.1 0 1 1 15-4.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.6c.2-.4.4-.4.6-.4h.4c.2 0 .3.1.4.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4-.1.6.6 1 1.4 1.7 2.4 2.2.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.4.7c.2.1.3.2.3.4 0 .3-.2 1.1-.8 1.5-.5.4-1.1.6-1.8.4-1.2-.3-2.5-1-3.7-2.1-1-.9-1.8-2.1-2-3.2-.2-.9.2-1.6.6-2.1.2-.1.4-.2.5-.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <a className="brand" href="#inicio" aria-label="BlindMax — início">
      <span className="brand-emblem" aria-hidden="true">
        <img 
          src="/simboloPreto.jpg" 
          alt="" 
          width={23} 
          height={23} 
        />
        <span className="brand-emblem-core" />
      </span>
      <span className="brand-wordmark">
        <span className="brand-name">BLIND<span>MAX</span></span>
        <span className="brand-caption">PROTEÇÃO AVANÇADA</span>
      </span>
    </a>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-kicker">
      <span className="kicker-line" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="inicio">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="nav-inner">
          <BrandMark />
          <nav id="primary-nav" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Navegação principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-mobile-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
              <WhatsAppMark /> Falar com especialista
            </a>
          </nav>
          <a className="button button-gold nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <WhatsAppMark /> <span>Falar com especialista</span> <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy" data-reveal>
              <SectionKicker>PROTEÇÃO DE ALTO PADRÃO · JOÃO PESSOA, PB</SectionKicker>
              <h1 id="hero-title">Mais proteção para <span>o que te conecta.</span></h1>
              <p className="hero-description">
                Blindagem avançada para smartphones, smartwatches e tablets. Tecnologia,
                cuidado e acabamento premium para acompanhar sua rotina.
              </p>
              <div className="hero-actions">
                <a className="button button-gold button-large" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <WhatsAppMark size={20} /> Blindar meu dispositivo <ArrowRight size={17} />
                </a>
                <a className="button button-outline button-large" href="#solucoes">
                  Conhecer soluções <ArrowDown size={16} />
                </a>
              </div>
              <div className="hero-assurances" aria-label="Diferenciais">
                <span><Sparkles size={15} /> Aplicação cuidadosa</span>
                <span><ShieldCheck size={16} /> Proteção discreta</span>
                <span><MapPin size={15} /> João Pessoa — PB</span>
              </div>
              <div className="hero-note">Cada dispositivo é único. Consulte a solução e as condições para o seu modelo.</div>
            </div>

          <div className="hero-art" data-reveal aria-label="Imagem conceitual de smartphone em fundo escuro">
  <div className="hero-image-frame">
    <img 
      src="/apple01.jpg" 
      alt="Smartphone premium sob iluminação escura com reflexos dourados" 
      fetchPriority="high" 
    />
    <div className="hero-image-shade" />
  </div>
  <div className="hero-orbit orbit-one" />
  <div className="hero-orbit orbit-two" />
  <div className="hero-product-tag"><span className="tag-dot" /> CUIDADO EM CADA DETALHE</div>
  <div className="hero-stamp" aria-hidden="true">
    <span>BLIND</span><Shield size={27} strokeWidth={1.2} /><span>MAX</span>
  </div>
</div>
          </div>
          <div className="hero-bottom-rule"><span /> <span>01 / 04</span></div>
        </section>

        <section className="intro-strip" aria-label="Atendimento regional">
          <div className="intro-strip-inner">
            <span className="intro-label">CUIDADO QUE VAI COM VOCÊ</span>
            <p>Proteção pensada para a sua rotina, <em>sem abrir mão do design.</em></p>
            <span className="intro-location"><MapPin size={15} /> João Pessoa &amp; região</span>
          </div>
        </section>

        <section className="section services-section" id="solucoes" aria-labelledby="services-title">
          <div className="section-heading" data-reveal>
            <SectionKicker>PROTEÇÃO PARA O SEU DIA A DIA</SectionKicker>
            <div className="heading-row">
              <h2 id="services-title">O que nós <span>blindamos.</span></h2>
              <p>Seu dispositivo merece uma proteção à altura do lugar que ocupa na sua vida.</p>
            </div>
          </div>
          <div className="services-grid">
            <article className="service-card" data-reveal>
              <div className="card-topline"><span>01 / DISPOSITIVOS</span><Smartphone size={19} strokeWidth={1.5} /></div>
              <div className="service-icon"><Smartphone size={29} strokeWidth={1.3} /></div>
              <h3>Smartphones</h3>
              <p>Mais tranquilidade para o seu dia. Proteção para a tela e o corpo do aparelho, preservando a experiência de uso.</p>
              <a className="text-link" href={`${WHATSAPP_URL}`} target="_blank" rel="noreferrer">Consultar meu modelo <ArrowUpRight size={15} /></a>
              <span className="card-index">01</span>
            </article>
            <article className="service-card card-featured" data-reveal>
              <div className="card-topline"><span>02 / DISPOSITIVOS</span><Watch size={19} strokeWidth={1.5} /></div>
              <div className="service-icon"><Watch size={29} strokeWidth={1.3} /></div>
              <h3>Smartwatches</h3>
              <p>Proteção que acompanha o seu ritmo. Ajude a preservar o visor do seu relógio inteligente durante treinos e rotina.</p>
              <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Consultar meu modelo <ArrowUpRight size={15} /></a>
              <span className="card-index">02</span>
            </article>
            <article className="service-card" data-reveal>
              <div className="card-topline"><span>03 / DISPOSITIVOS</span><Tablet size={19} strokeWidth={1.5} /></div>
              <div className="service-icon"><Tablet size={29} strokeWidth={1.3} /></div>
              <h3>Tablets</h3>
              <p>Consulte opções de proteção para a tela e a compatibilidade do seu tablet, com cuidado para preservar o uso e o acabamento do aparelho.</p>
              <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Consultar meu tablet <ArrowUpRight size={15} /></a>
              <span className="card-index">03</span>
            </article>
          </div>
          <p className="section-footnote">Disponibilidade, compatibilidade e condições podem variar conforme o dispositivo e a solução. Consulte a equipe.</p>
        </section>

        <section className="benefits-section" id="beneficios" aria-labelledby="benefits-title">
          <div className="benefits-inner">
           <div className="benefits-visual" data-reveal>
              <div className="visual-frame">
                <div className="visual-light" />
                
                {/* Substituímos a div visual-phone pela tag img apontando para a imagem real */}
                <img 
                  src="/apple02.jpg" 
                  alt="Mão segurando smartphone com película aplicada" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain', // Garante que a imagem inteira caiba sem cortar
                    display: 'block',
                    position: 'relative',
                    zIndex: 1
                  }}
                />

                <div className="visual-caption"><span>PRECISÃO</span><span>EM CADA CAMADA</span></div>
                <div className="visual-number">BM<span>.</span>01</div>
              </div>
              <div className="visual-side-note">DESENVOLVIDO PARA PRESERVAR A EXPERIÊNCIA ORIGINAL</div>
            </div>
            <div className="benefits-copy" data-reveal>
              <SectionKicker>O PADRÃO BLINDMAX</SectionKicker>
              <h2 id="benefits-title">Proteção inteligente.<br /><span>Estética preservada.</span></h2>
              <p className="benefits-lead">Uma boa proteção não precisa chamar atenção. Precisa fazer sentido para o seu dispositivo e para o jeito que você usa.</p>
              <div className="benefit-list">
                <div className="benefit-item">
                  <span className="benefit-icon"><ShieldCheck size={19} /></span>
                  <div><h3>Cuidado além do básico</h3><p>Conheça alternativas de proteção para ajudar a reduzir os efeitos de riscos e impactos do cotidiano.</p></div>
                  <Check className="benefit-check" size={16} />
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon"><Eye size={19} /></span>
                  <div><h3>Acabamento discreto</h3><p>Uma proposta pensada para preservar o visual e a experiência do seu dispositivo.</p></div>
                  <Check className="benefit-check" size={16} />
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon"><MapPin size={19} /></span>
                  <div><h3>Atendimento local</h3><p>Converse com a equipe em João Pessoa e região para tirar dúvidas e encontrar a opção adequada.</p></div>
                  <Check className="benefit-check" size={16} />
                </div>
              </div>
              <a className="button button-outline benefits-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Tire suas dúvidas <ArrowUpRight size={16} /></a>
              <p className="disclaimer">A blindagem não torna o dispositivo indestrutível. Os resultados variam por material, modelo e condições de uso. Consulte os termos aplicáveis.</p>
            </div>
          </div>
        </section>

        <section className="reviews-section" id="avaliacoes" aria-labelledby="reviews-title">
          <div className="reviews-inner">
            <div className="reviews-heading" data-reveal>
              <SectionKicker>CONFIANÇA COMPROVADA</SectionKicker>
              <h2 id="reviews-title">O que dizem <span>nossos clientes.</span></h2>
              <p>Quem blinda com a BlindMax em João Pessoa recomenda a experiência de proteção sem perder a elegância.</p>
            </div>
            <div className="reviews-grid">
              <article className="review-card" data-reveal>
                <div>
                  <div className="review-stars" aria-label="Avaliação de cinco estrelas">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" strokeWidth={1.3} />)}</div>
                  <p className="review-quote">“Fiz a blindagem do meu iPhone 15 Pro Max e do meu relógio. Ficou totalmente imperceptível e o atendimento em João Pessoa foi impecável. Recomendo demais!”</p>
                </div>
                <div className="review-author">
                  <span className="review-avatar" aria-hidden="true">RM</span>
                  <div><h3>Rodrigo Medeiros</h3><span>Altiplac, João Pessoa - PB</span></div>
                </div>
              </article>
              <article className="review-card" data-reveal>
                <div>
                  <div className="review-stars" aria-label="Avaliação de cinco estrelas">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" strokeWidth={1.3} />)}</div>
                  <p className="review-quote">“Sempre tive agonia de usar película grossa que estraga o design do celular. A blindagem da BlindMax resolveu isso com muita sofisticação. Vale cada centavo.”</p>
                </div>
                <div className="review-author">
                  <span className="review-avatar" aria-hidden="true">CL</span>
                  <div><h3>Camila Lima</h3><span>Manaíra, João Pessoa - PB</span></div>
                </div>
              </article>
              <article className="review-card" data-reveal>
                <div>
                  <div className="review-stars" aria-label="Avaliação de cinco estrelas">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" strokeWidth={1.3} />)}</div>
                  <p className="review-quote">“Fiz a blindagem no Tablet da minha Filha e no meu relógio. Ficou totalmente imperceptível, e sem aquelas marcas de digitais, obrigado. Recomendo demais!”</p>
                </div>
                <div className="review-author">
                  <span className="review-avatar" aria-hidden="true">MJ</span>
                  <div><h3>Marli Jordânia</h3><span>Bancários, João Pessoa - PB</span></div>
                </div>
              </article>
            </div>
            <div className="reviews-cta" data-reveal>
              <p>Quer ver fotos reais de aplicações e bastidores?</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Chame no WhatsApp <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>

        <section className="faq-section section" id="faq" aria-labelledby="faq-title">
          <div className="faq-inner">
            <div className="faq-heading" data-reveal>
              <SectionKicker>RESPOSTAS SEM COMPLICAÇÃO</SectionKicker>
              <h2 id="faq-title">Perguntas <span>frequentes.</span></h2>
              <p>Não encontrou o que procura? A equipe pode ajudar pelo WhatsApp.</p>
              <a className="faq-contact" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Fale com um especialista <ArrowUpRight size={15} /></a>
            </div>
            <div className="faq-list" data-reveal>
              {faqs.map((faq, index) => (
                <details className="faq-item" key={faq.question} open={index === 0}>
                  <summary><span className="faq-index">0{index + 1}</span><span>{faq.question}</span><ChevronDown size={19} className="faq-chevron" /></summary>
                  <div className="faq-answer"><p>{faq.answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <div className="final-cta-pattern" aria-hidden="true" />
          <div className="final-cta-inner" data-reveal>
            <div className="final-icon"><ShieldCheck size={25} strokeWidth={1.35} /></div>
            <SectionKicker>UM CUIDADO A MAIS, HOJE</SectionKicker>
            <h2 id="final-title">Não espere a primeira queda<br />para proteger <span>seu investimento.</span></h2>
            <p>Conte para a BlindMax qual dispositivo você quer proteger. A equipe ajuda você a dar o próximo passo.</p>
            <a className="button button-gold button-large final-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <WhatsAppMark size={20} /> Falar com a BlindMax <ArrowRight size={17} />
            </a>
            <span className="final-location"><MapPin size={14} /> Atendimento em João Pessoa e região</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-group"><BrandMark /><p>Proteção avançada para os dispositivos que fazem parte da sua vida.</p></div>
          <div className="footer-links"><span className="footer-label">EXPLORE</span><a href="#beneficios">Benefícios</a><a href="#solucoes">O que blindamos</a><a href="#avaliacoes">Avaliações</a><a href="#faq">Perguntas frequentes</a></div>
          <div className="footer-contact"><span className="footer-label">FALE COM A GENTE</span><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppMark /> Conversar pelo WhatsApp <ArrowUpRight size={14} /></a>{INSTAGRAM_URL ? <a className="footer-instagram-slot" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram <ArrowUpRight size={13} /></a> : <span className="footer-instagram-slot footer-instagram-placeholder"><Instagram size={15} /><span>Instagram <small>link do perfil a configurar</small></span></span>}<span><MapPin size={14} /> João Pessoa — Paraíba</span></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} BlindMax. Todos os direitos reservados.</span><span>Feito para proteger o que importa.</span></div>
      </footer>

      <a className="mobile-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Fale com a BlindMax pelo WhatsApp">
        <WhatsAppMark size={20} /><span>Falar com especialista</span><ArrowRight size={16} />
      </a>
    </div>
  );
}
