import React from "react";
import styles from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = currentPage;
    let curPF = ((curP - 4) < 0) ? 0 : curP - 4;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL)

    return <div className={styles.elements}>
        <div>
            {currentPage ===1? '':
            <button onClick={() => {
                onPageChanged(1)
            }} className={styles.button}>Back to first
            </button>}
            {currentPage === 1? '':
            <button onClick={() => {onPageChanged(currentPage - 1)
            }} className={styles.button}>
                Back
            </button>}
            {slicedPages.map(p => {
                return <span key={p} className={currentPage === p ? styles.selectedPage : styles.notSelectedPage}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
            {currentPage === pagesCount? '':
                <button onClick={() => {onPageChanged(currentPage + 1)
                }} className={styles.button}>
                    Next
                </button>}
        </div>
    </div>
}

export default Paginator;