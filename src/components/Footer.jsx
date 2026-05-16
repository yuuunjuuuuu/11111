import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="py-12 bg-dark-950 border-t border-dark-800 text-dark-500 text-sm">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-6 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                    <Logo className="w-6 h-6" />
                    <span className="font-bold text-lg text-white">Data Insight</span>
                </div>
                <p className="text-dark-400 mb-1">문의: 010-8282-8051</p>
                <p className="mb-4 text-center">
                    Data Insight Academy | Representative: Yunju Lee | Contact: yundu0112@gmail.com
                </p>
                <p>
                    &copy; {new Date().getFullYear()} Data Insight Academy. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
