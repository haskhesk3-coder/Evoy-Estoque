'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, Download, Menu, Package, Radio, Search, ShieldCheck, X } from 'lucide-react'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Suporte', href: '#suporte' },
]

const features = [
  { icon: Package, title: 'Estoque inteligente', text: 'Tenha uma visão clara de cada entrada, saída e movimentação em um só lugar.' },
  { icon: Radio, title: 'Tecnologia RFID', text: 'Acelere a conferência e reduza erros com leitura rápida e precisa.' },
  { icon: Search, title: 'Busca instantânea', text: 'Encontre produtos, lotes e históricos em poucos segundos.' },
  { icon: ShieldCheck, title: 'Controle seguro', text: 'Permissões e registros para manter sua operação protegida.' },
]

const steps = [
  ['01', 'Instale o EvoY', 'Baixe o aplicativo para Windows e configure o seu ambiente.'],
  ['02', 'Cadastre seus itens', 'Importe ou registre os produtos que fazem parte da sua operação.'],
  ['03', 'Acompanhe tudo', 'Use os dados do dia a dia para tomar decisões com mais segurança.'],
]

const faqs = [
  ['O EvoY funciona offline?', 'Sim. A estrutura foi pensada para manter a operação fluida mesmo em ambientes com conexão instável.'],
  ['Quando o instalador estará disponível?', 'O botão de download já está preparado. Basta substituir o arquivo em /public/downloads pelo instalador final do EvoY.'],
  ['Posso usar leitores RFID?', 'Sim. O módulo RFID está previsto para integração com leitores compatíveis e pode ser ativado conforme a sua operação.'],
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="EvoY início">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JcVgqqyxtD9hbKYA1tgJ3nrsnFbXVG.png" className="logo-visible h-11 w-auto object-contain" unoptimized alt="EvoY" width={120} height={92} priority />
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">{item.label}</a>)}
          </nav>
          <a href="#download" className="hidden items-center gap-2 rounded-full bg-[#12c968] px-5 py-2.5 text-sm font-bold text-[#06131e] transition hover:bg-[#35df87] sm:flex">Baixar o EvoY <Download size={16} /></a>
          <button className="rounded-lg p-2 md:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-white/10 bg-[#07111f] px-6 py-4 md:hidden">{navItems.map((item) => <a onClick={() => setMenuOpen(false)} key={item.href} href={item.href} className="block py-3 text-slate-300">{item.label}</a>)}<a href="#download" className="mt-2 block rounded-full bg-[#12c968] px-5 py-3 text-center font-bold text-[#06131e]">Baixar o EvoY</a></nav>}
      </header>

      <section id="inicio" className="relative isolate px-6 pb-24 pt-40 lg:px-8 lg:pb-32 lg:pt-48">
        <div className="absolute left-1/2 top-0 -z-10 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[#0c8a55]/20 blur-[130px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#12c968]/30 bg-[#12c968]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.16em] text-[#48e58f]"><span className="h-2 w-2 rounded-full bg-[#12c968]" /> Gestão que acompanha você</div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-.05em] sm:text-6xl lg:text-7xl">Seu estoque,<br /><span className="text-[#20d978]">mais inteligente.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">O EvoY conecta tecnologia e operação para você controlar produtos, movimentações e resultados com simplicidade.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#download" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#12c968] px-6 py-3.5 font-bold text-[#06131e] transition hover:bg-[#35df87]">Começar agora <ArrowRight size={18} /></a><a href="#recursos" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/40">Conhecer recursos</a></div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400"><span className="flex items-center gap-2"><Check className="text-[#20d978]" size={16} /> Instalação simples</span><span className="flex items-center gap-2"><Check className="text-[#20d978]" size={16} /> Feito para Windows</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#12c968]/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#14283a] to-[#0b1726] p-4 shadow-2xl shadow-black/40"><div className="flex items-center justify-between border-b border-white/10 px-3 pb-4"><div className="flex items-center gap-2"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JcVgqqyxtD9hbKYA1tgJ3nrsnFbXVG.png" className="logo-visible h-7 w-auto object-contain" unoptimized alt="" width={75} height={55} /><span className="text-sm font-medium text-slate-300">Painel de controle</span></div><span className="rounded-full bg-[#12c968]/15 px-2.5 py-1 text-xs text-[#57e79a]">Online</span></div><div className="grid grid-cols-2 gap-3 p-3"><div className="rounded-2xl bg-white/[.06] p-4"><p className="text-xs text-slate-400">Itens em estoque</p><p className="mt-2 text-3xl font-semibold">12.840</p><p className="mt-2 text-xs text-[#57e79a]">+8,4% este mês</p></div><div className="rounded-2xl bg-white/[.06] p-4"><p className="text-xs text-slate-400">Movimentações</p><p className="mt-2 text-3xl font-semibold">2.486</p><p className="mt-2 text-xs text-[#57e79a]">+12,1% este mês</p></div></div><div className="mx-3 mb-3 rounded-2xl bg-white/[.06] p-4"><div className="mb-5 flex items-center justify-between"><p className="text-sm font-medium">Fluxo de movimentações</p><span className="text-xs text-slate-400">Últimos 7 dias</span></div><div className="flex h-28 items-end gap-2">{[35,55,43,72,62,88,76,94,67,82,100,86].map((height, i) => <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-[#0ea954] to-[#48e58f] opacity-80" style={{ height: `${height}%` }} />)}</div></div></div>
          </div>
        </div>
      </section>

      <section id="recursos" className="border-y border-white/10 bg-[#0b1928] px-6 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-[#20d978]">Tudo conectado</p><h2 className="text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Feito para a operação real.</h2><p className="mt-5 text-lg leading-8 text-slate-400">Menos planilhas, menos retrabalho e mais clareza para o seu time.</p></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-white/10 bg-white/[.035] p-6 transition hover:-translate-y-1 hover:border-[#20d978]/40"><div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#12c968]/15 text-[#39df85]"><Icon size={21} /></div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>)}</div></div></section>

      <section id="como-funciona" className="px-6 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-[#20d978]">Comece sem complicação</p><h2 className="text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Do primeiro cadastro ao controle total.</h2></div><div className="grid gap-4 md:grid-cols-3">{steps.map(([number, title, text]) => <article key={number} className="border-t border-white/20 pt-5"><span className="text-sm font-bold text-[#20d978]">{number}</span><h3 className="mt-8 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>)}</div></div></div></section>

      <section id="download" className="px-6 pb-24 lg:px-8"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#20d978]/30 bg-gradient-to-br from-[#0d583d] to-[#0c2630] p-8 sm:p-12 lg:p-16"><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#78f2ae]">Pronto para evoluir?</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Baixe o EvoY e tenha o controle na palma da mão.</h2><p className="mt-5 max-w-xl text-slate-200">O instalador para Windows será disponibilizado aqui. A estrutura do site já está preparada para receber a versão oficial.</p></div><a href="https://raw.githubusercontent.com/haskhesk3-coder/Evoy-Estoque/main/EvoY-Estoque-1.0.0-x64-setup.exe" download="EvoY-Estoque-1.0.0-x64-setup.exe" type="application/octet-stream" aria-label="Baixar instalador EvoY para Windows" className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-[#072116] transition hover:bg-[#d9ffe8]"><Download size={19} /> Baixar para Windows</a></div></div></section>

      <section id="suporte" className="bg-[#0b1928] px-6 py-24 lg:px-8"><div className="mx-auto max-w-3xl"><div className="text-center"><p className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-[#20d978]">Suporte</p><h2 className="text-4xl font-semibold tracking-[-.04em]">Perguntas frequentes</h2></div><div className="mt-12 divide-y divide-white/10 border-y border-white/10">{faqs.map(([question, answer], index) => <div key={question}><button className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{question}<ChevronDown size={18} className={`shrink-0 transition ${openFaq === index ? 'rotate-180 text-[#20d978]' : 'text-slate-400'}`} /></button>{openFaq === index && <p className="-mt-2 pb-5 pr-8 text-sm leading-6 text-slate-400">{answer}</p>}</div>)}</div></div></section>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row"><div className="flex items-center gap-3"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JcVgqqyxtD9hbKYA1tgJ3nrsnFbXVG.png" className="logo-visible h-8 w-auto object-contain" unoptimized alt="EvoY" width={80} height={60} /><span className="text-xs text-slate-500">Tecnologia para evoluir sua operação.</span></div><p className="text-xs text-slate-500">© 2026 EvoY. Todos os direitos reservados.</p></div></footer>
    </main>
  )
}



