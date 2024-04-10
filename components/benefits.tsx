import Image from 'next/image';
import icon1 from '/public/delivery.png';
import icon4 from '/public/location.png';
import icon3 from '/public/menu.png';
import icon2 from '/public/salad.png';

export const Benefits = () => {
    return (
        <div className='container mb-10 mt-4 grid grid-cols-4 justify-between gap-3'>
            <div className='flex flex-col items-center gap-2 rounded-xl border border-secondary p-2'>
                <div className='w-max rounded-full border-2 border-secondary p-3 dark:bg-foreground'>
                    <Image
                        src={icon1}
                        alt='icon'
                        className='h-[48px] w-[48px]'
                    />
                </div>

                <h5 className='text-lg font-bold'>Мгновенная доставка</h5>
                <p className='text-center leading-5'>
                    Доставим заказанную вами еду за 30 минут + напиток в подарок
                </p>
            </div>

            <div className='flex flex-col items-center gap-2 rounded-xl border border-secondary p-2'>
                <div className='w-max rounded-full border-2 border-secondary p-3 dark:bg-foreground'>
                    <Image
                        src={icon2}
                        alt='icon'
                        className='h-[48px] w-[48px]'
                    />
                </div>

                <h5 className='text-lg font-bold'>Свежие продукты</h5>
                <p className='text-center leading-5'>
                    Вся продукция хранится в хороших условиях тем самым
                    продливая срок хранения
                </p>
            </div>

            <div className='flex flex-col items-center gap-2 rounded-xl border border-secondary p-2'>
                <div className='w-max rounded-full border-2 border-secondary p-3 dark:bg-foreground'>
                    <Image src={icon3} alt='icon' />
                </div>

                <h5 className='text-lg font-bold'>Уникальное меню</h5>
                <p className='text-center leading-5'>
                    Ежедневно мы обновляем наше меню и том числе коктейльное
                </p>
            </div>

            <div className='flex flex-col items-center gap-2 rounded-xl border border-secondary p-2'>
                <div className='w-max rounded-full border-2 border-secondary p-3 dark:bg-foreground'>
                    <Image
                        src={icon4}
                        alt='icon'
                        className='h-[48px] w-[48px]'
                    />
                </div>

                <h5 className='text-lg font-bold'>Доставка</h5>
                <p className='text-center leading-5'>
                    Мы быстро доставляем вашу еду по указанному адресу
                </p>
            </div>
        </div>
    );
};
