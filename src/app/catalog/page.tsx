'use client';
import { CardsProducts } from "@/components/CardsProducts";
import styles from "./styles.module.scss";
import { useCatolog } from "./useCatolog";

export default function Catalog() {
    const {category,filterList,handleChangeCategory, allProducts} =useCatolog()

  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <p>Filtros</p>
        <section className={styles.wrapperInput}>
          <p>Categorias</p>
          <label>
            <input
              onChange={handleChangeCategory}
              checked={category === 'f'}
              value='f'
              type="radio"
              name="category"
            />
            mulher
          </label>
          <label>
            <input
              onChange={handleChangeCategory}
              checked={category === 'mi'}
              value='mi'
              type="radio"
              name="category"
            />
            infantil masculino
          </label>
          <label>
            <input
              onChange={handleChangeCategory}
              checked={category === 'fi'}
              value='fi'
              type="radio"
              name="category"
            />
            infantil feminino
          </label>
          <label>
            <input
              onChange={handleChangeCategory}
              checked={category === 'm'}
              value="m"
              type="radio"
              name="category"
            />
            homem
          </label>
        </section>
      </aside>
      <section className={styles.wrapperCards}>
        <div className={styles.wrapperTitle}>
          <h3>
            <span>TODAS AS</span> COLEÇÕES
          </h3>
        </div>
        <div className={styles.containerCards}>
          {filterList.length > 0
            ? filterList.map(({ id, img, price, title }) => (
                <CardsProducts
                  key={id}
                  img={img}
                  id={id}
                  price={price}
                  title={title}
                />
              ))
            : allProducts.map(({ id, img, price, title }) => (
                <CardsProducts
                  key={id}
                  img={img}
                  id={id}
                  price={price}
                  title={title}
                />
              ))}
        </div>
      </section>
    </main>
  );
}
