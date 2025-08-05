import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              Noxus
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Transformamos seu negócio com inteligência artificial. Soluções inovadoras para um futuro mais eficiente.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Serviços
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Loja Virtual com IA
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Atendimento 24/7
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Agendamento Automático
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Consultoria em IA
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">contato@noxus.ai</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">(11) 9 9999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">São Paulo, Brasil</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Noxus. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 0H7.983C3.588 0 0 3.588 0 7.983v4.034C0 16.412 3.588 20 7.983 20h4.034C16.412 20 20 16.412 20 12.017V7.983C20 3.588 16.412 0 12.017 0zM18.017 12.017c0 3.312-2.688 6-6 6H7.983c-3.312 0-6-2.688-6-6V7.983c0-3.312 2.688-6 6-6h4.034c3.312 0 6 2.688 6 6v4.034z" clipRule="evenodd" />
                  <path d="M9.982 4.819c-2.844 0-5.15 2.307-5.15 5.15s2.307 5.15 5.15 5.15 5.15-2.307 5.15-5.15-2.307-5.15-5.15-5.15zM9.982 13.05c-1.724 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM15.294 2.886a1.223 1.223 0 100 2.447 1.223 1.223 0 000-2.447z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.472 2.528C15.555.611 13.025 0 10.473 0 4.707 0 0 4.707 0 10.473c0 1.847.482 3.654 1.402 5.248L0 20l4.373-1.372c1.54.843 3.271 1.287 5.1 1.287 5.766 0 10.473-4.707 10.473-10.473 0-2.793-1.086-5.42-3.06-7.394l-.414-.42zM10.473 19.16c-1.567 0-3.103-.42-4.448-1.215l-.318-.189-3.301 1.037 1.058-3.126-.207-.331c-.874-1.391-1.335-2.998-1.335-4.663 0-4.828 3.928-8.756 8.756-8.756 2.34 0 4.537.911 6.191 2.565 1.654 1.654 2.565 3.85 2.565 6.191-.005 4.831-3.933 8.756-8.761 8.756v.731zm4.8-6.553c-.264-.132-1.563-.771-1.805-.86-.241-.089-.417-.132-.593.132-.176.265-.683.86-.838 1.037-.154.176-.309.198-.573.066-.264-.132-1.115-.411-2.125-1.309-.786-.7-1.317-1.564-1.471-1.828-.154-.264-.017-.407.116-.538.119-.119.264-.309.396-.463.132-.154.176-.264.264-.44.089-.176.044-.33-.022-.462-.066-.132-.593-1.428-.813-1.956-.214-.514-.432-.444-.593-.452-.154-.007-.33-.009-.506-.009-.176 0-.462.066-.704.33-.241.264-.926.906-.926 2.209 0 1.303.948 2.563 1.08 2.74.132.176 1.847 2.821 4.472 3.958.625.27 1.113.43 1.493.551.627.199 1.198.171 1.649.103.503-.075 1.563-.639 1.783-1.257.22-.617.22-1.146.154-1.257-.066-.11-.241-.176-.506-.309l.132-.023z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};