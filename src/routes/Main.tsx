import React from 'react';
import styles from './Main.module.css';
import QuestionMarker from 'components/QuestionMarker';

function Main(){
    return(
        <div className={styles.root}>
            <section style={{marginTop: '100px'}} className={styles.section_root}>
                <div className={styles.section_header}>
                    <span className={styles.title_text}>마켓 인덱스</span>
                    <QuestionMarker />
                </div>
                <hr style={{width: '960px', borderColor: '#202020'}} />
                <div style={{marginTop: 24}}>
                    <div>
                        
                    </div>
                </div>
            </section>
            <section className={styles.section_root}>
                <div className={styles.section_header}>
                <span className={styles.title_text}>이데리 명예의 전당</span>
                <QuestionMarker />
                </div>
            </section>
            <section className={styles.section_root}>
                <div className={styles.section_header}>
                    <span className={styles.title_text}>인기 커뮤니티 글</span>
                    <QuestionMarker />
                </div>
            </section>
        </div>
    );
}

export default Main;