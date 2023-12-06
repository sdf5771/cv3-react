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
import { CircleQuestion } from 'assets/svg-components';

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
                <div className={styles.table_container}>
                    <div className={styles.table_header}>
                        <div className={styles.td} style={{width: 92, marginLeft: 11, marginRight: 15}}>
                            <span className={styles.td_title_text}>이미지</span>
                        </div>
                        <div className={styles.td} style={{width: 414, marginRight: 20}}>
                            <span className={styles.td_title_text}>상품정보</span>
                        </div>
                        <div style={{marginRight: 8}} className={styles.td}>
                            <span className={styles.td_title_text}>맞춤보고서</span>
                            <div style={{width: 17, height: 17}}><CircleQuestion width={16} height={16}/></div>
                        </div>
                        <div style={{width: 102,marginRight: 4}} className={styles.td}>
                            <span className={styles.td_title_text}>평균매출</span>
                            <div style={{width: 17, height: 17}}><CircleQuestion width={16} height={16}/></div>
                        </div>
                        <div style={{width: 102,marginRight: 4}} className={styles.td}>
                            <span className={styles.td_title_text}>평균판매량</span>
                            <div style={{width: 17, height: 17}}><CircleQuestion width={16} height={16}/></div>
                        </div>
                        <div style={{width: 102,marginRight: 8}} className={styles.td}>
                            <span className={styles.td_title_text}>백분위</span>
                            <div style={{width: 17, height: 17}}><CircleQuestion width={16} height={16}/></div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        
                    </div>
                </div>
            </section>
            <section style={{marginTop: 48}} className={styles.section_root}>
                <div className={styles.section_header}>
                    <span className={styles.title_text}>인기 커뮤니티 글</span>
                </div>
                <hr style={{margin: 0, width: '960px', borderColor: '#202020'}} />
                <div className={styles.table_container}>
                    <div className={styles.table_header}>
                        <div className={styles.td} style={{width: '10%'}}>
                            <span className={styles.td_title_text}>말머리</span>
                        </div>
                        <div className={styles.td} style={{width: '60%'}}>
                            <span className={styles.td_title_text}>제목</span>
                        </div>
                        <div style={{width: '10%'}} className={styles.td}>
                            <span className={styles.td_title_text}>작성자</span>
                        </div>
                        <div style={{width: '15%'}} className={styles.td}>
                            <span className={styles.td_title_text}>조회수</span>
                        </div>
                        <div style={{width: '15%'}} className={styles.td}>
                            <span className={styles.td_title_text}>작성일자</span>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        
                    </div>
                </div>
            </section>
            <section style={{marginTop: 48}} className={styles.section_root}>
                <div className={styles.section_header}>
                    <span className={styles.title_text}>최신 뉴스</span>
                </div>
                <hr style={{margin: 0, width: '960px', borderColor: '#202020'}} />
                <div className={styles.table_container}>
                    <div className={styles.table_header}>
                        <div className={styles.td} style={{width: 640}}>
                            <span className={styles.td_title_text}>제목</span>
                        </div>
                        <div style={{width: 85}} className={styles.td}>
                            <span className={styles.td_title_text}>조회수</span>
                        </div>
                        <div style={{width: 65,marginLeft: 73,marginRight: 32}} className={styles.td}>
                            <span className={styles.td_title_text}>작성일자</span>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;