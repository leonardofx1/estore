import { CardsCategoryPopular } from './CardsCategoryPopular';
import styles from './styles.module.scss'
import blender from '@/assets/blender.webp'
export const CategoryPopular = () => {
  return (
    <section className={styles.wrapperCategoryPopular}>
      <h2>Categorias Popular</h2>

      <div className={styles.wrapperCardsCategory}>
        <CardsCategoryPopular brand={'Cozinha'} img={blender}/> 
    
      </div>
    </section>
  );
};
