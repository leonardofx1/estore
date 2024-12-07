import Image from 'next/image';
import styles from './styles.module.scss';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IProducts, useCartContext } from '@/components/context/CartContext';
import { formatCurrency } from '@/utils/formatCurrency';


interface CardCartProps extends IProducts {
  quantity: number;
  onQuantityChange: (id: number, quantity: number) => void;
}

export const CardCart = ({ id, img, price, title, quantity, onQuantityChange }: CardCartProps) => {
  const { handleDeleteCard } = useCartContext();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    onQuantityChange(id, newQuantity);
  };

  return (
    <article key={id} className={styles.wrapperCard}>
      <div className={styles.wrapperImgDescription}>
        <Image className={styles.imgCart} alt='product' src={img} width={300} height={300} />
        <div className={styles.containerDescription}>
          <p>{title}</p>
          <span className={styles.price}>{price ? formatCurrency(price as number) : 0}</span>
        </div>
      </div>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <span onClick={() => handleDeleteCard(id)} className={styles.close}>
        <RiDeleteBinLine />
      </span>
    </article>
  );
};
