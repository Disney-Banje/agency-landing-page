import arrow from './assets/icon-arrow-down.svg';

function HeroSection() {
    return (
        <section className='h-screen pt-8 md:pt-40 px-2 text-center flex flex-col gap-8 md:gap-20 justify-center items-center md:justify-start bg-[url("src/assets/mobile/image-header.jpg")] md:bg-[url("src/assets/desktop/image-header.jpg")] bg-cover bg-center'>
            <h1 className='text-white text-4xl tracking-[8px] md:tracking-[12px] uppercase font-fraunces font-extrabold'>We are creatives</h1>
            <div>
                <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
            </div>
        </section>
    );
}

export default HeroSection;