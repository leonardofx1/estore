
import styles from './styles.module.scss'



export const Header = () => {



    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.wrapperLi}>
                    <li>Sobre</li>
                    <li>Suporte</li>
                    <li>Catalogo</li>
                </ul>
            </nav>
            <h1>
                <span className={styles.markedLetter}>E</span>store
            </h1>
            <ul className={styles.wrapperLi}>
                <li>Icon</li>
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
            </ul>
        </header>
    )
}