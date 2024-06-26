import { CartItem } from '@/lib/store/store';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { useToast } from '../ui/use-toast';
import { CartEmpty } from './cart-empty';
import { CartList } from './cart-list';

export const Cart = ({
    cart,
    finalCost,
    removeAll,
    increase,
    decrease,
}: {
    cart: CartItem[];
    finalCost: number;
    removeAll: () => void;
    increase: (newFood: CartItem) => void;
    decrease: (id: string) => void;
}) => {
    const { toast } = useToast();
    if (!cart.length) return <CartEmpty />;

    const removeAllHandler = () => {
        removeAll();
        toast({
            description: <div className='text-base'>Корзина очищена</div>,
        });
    };

    return (
        <div className='w-full p-0'>
            <div className='flex gap-2'>
                <Button
                    onClick={removeAllHandler}
                    className='mb-2 rounded-md text-base hover:bg-primary'
                    tabIndex={-1}
                >
                    Очистить корзину
                </Button>
                <Button
                    className='mb-2 rounded-md bg-blue-500 text-base hover:bg-blue-600'
                    tabIndex={-1}
                >
                    К оплате
                </Button>
            </div>
            <div className='border-b'>Общая сумма: {finalCost} сом</div>
            <ScrollArea className='mt-2 h-[600px] max-h-screen w-full rounded-sm xl:h-[700px] 2xl:h-[800px]'>
                <CartList cart={cart} increase={increase} decrease={decrease} />
            </ScrollArea>
        </div>
    );
};
