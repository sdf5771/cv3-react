import React from 'react';
import styles from './Main.module.css';
import QuestionMarker from 'components/QuestionMarker';
import { useQuery } from '@tanstack/react-query';
import postEcommData from 'queries/postEcommData';
import { bestProducts } from 'types/bestProducts';
import { community } from 'types/community';
import { marketIndexType } from 'types/marketIndextype';
import { news } from 'types/news';
import MarketIndexEle from 'components/MarketIndexEle';

type resData = {
	// 마켓 인덱스
	idx: marketIndexType,
	// 베스트 상품
	best: bestProducts,
	// 인기 커뮤니티 글
	cmty: community,
	// 최신뉴스
	news: news
}

function Main(){
    const {isLoading, isError, data, error, refetch} = useQuery({
        queryKey: ['ecommData'],
        queryFn: postEcommData
    });
    console.log('data ', data);
    return(
        <div className={styles.root}>
            <section style={{marginTop: '100px'}} className={styles.section_root}>
                <div className={styles.section_header}>
                    <span className={styles.title_text}>마켓 인덱스</span>
                    <QuestionMarker />
                </div>
                <hr style={{margin: 0, width: '960px', borderColor: '#202020'}} />
                <div style={{marginTop: 24}}>
                    <div className={styles.market_index_list}>
                        {
                            data ? 
                                <>
                                    <MarketIndexEle 
                                        title='EDR100 이데리 100지수'
                                        date={data.idx.edrt100.dt}
                                        IDX={data.idx.edrt100}
                                    />
                                    <MarketIndexEle 
                                        title='EDRI 이데리 동향지수'
                                        date={data.idx.edri.dt}
                                        IDX={data.idx.edri}
                                    />
                                    <MarketIndexEle 
                                        title='EDRI 이커머스 동향지수'
                                        date={data.idx.ecsi.dt}
                                        IDX={data.idx.ecsi}
                                    />
                                    <MarketIndexEle 
                                        title='SCI 소비자 동향지수'
                                        date={data.idx.csi.dt}
                                        IDX={data.idx.csi}
                                    />
                                </>
                            : null
                        }
                    </div>
                </div>
            </section>
            <section style={{marginTop: 48}} className={styles.section_root}>
                <div className={styles.section_header}>
                    <span className={styles.title_text}>이데리 명예의 전당</span>
                    <QuestionMarker />
                </div>
                <hr style={{margin: 0, width: '960px', borderColor: '#202020'}} />
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </section>
            <section style={{marginTop: 48}} className={styles.section_root}>
                <div className={styles.section_header}>
                    <span className={styles.title_text}>인기 커뮤니티 글</span>
                </div>
                <hr style={{margin: 0, width: '960px', borderColor: '#202020'}} />
                <div>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </section>
            <section style={{marginTop: 48}} className={styles.section_root}>
                <div className={styles.section_header}>
                    <span className={styles.title_text}>최신 뉴스</span>
                </div>
                <hr style={{margin: 0, width: '960px', borderColor: '#202020'}} />
                <div>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;