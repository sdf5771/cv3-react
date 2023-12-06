import React, { useEffect, useState } from 'react';
import styles from './MarketIndexEle.module.css';
import { IDX } from 'types/marketIndextype';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { UpperVector, DownVector } from 'assets/svg-components'; 

type Tprops = {
    title: string,
    date: string,
    IDX: IDX,
}

function MarketIndexEle({title, date, IDX}: Tprops){
    console.log(title, IDX)
    let tempData: {
        name: string,
        uv: number,
    }[] = []

    IDX.grf.forEach((item) => tempData.push({name: '20' + item.dt, uv: item.val}))
    
    return(
        <div className={styles.market_index_ele_root}>
            <div className={styles.header_container}>
                <span className={styles.title_text}>{title}</span>
                <span className={styles.date_text}>{"20" + date.substring(0, 2) + '.' + date.substring(2, 4) + '.' + date.substring(4, 6)}</span>
            </div>
            <div style={{marginTop: 10, position: 'relative', width: 225, height: 112, borderRadius: 12, border: '1px solid #eaeaea'}}>
                <div className={styles.graph_header_container}>
                    <span className={`${styles.graph_title_text} ${IDX.d_pt > 0 ? styles.red : styles.blue}`}>{IDX.val}</span>
                    <div>
                        <span className={`${styles.graph_description_text} ${IDX.d_pt > 0 ? styles.red : styles.blue}`}>{IDX.d_pt > 0 ? <UpperVector style={{marginBottom: 2}} width={8} height={7}/> : <DownVector style={{marginBottom: 2}} width={8} height={7}/>} {Math.round(IDX.d_pt * 100) / 100}</span>
                        <span className={`${styles.graph_description_text} ${IDX.d_pt > 0 ? styles.red : styles.blue}`}>{`${IDX.d_pt > 0 ? '+' : ''}${Math.round(IDX.d_pct * 100) / 100}`}%</span>
                    </div>
                </div>
                <ResponsiveContainer>
                    <AreaChart  
                        width={225}
                        height={112}
                        data={tempData}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                        >
                    <Area type="monotone" dataKey="uv" stroke="#B8B8B8" fill="#F0F0F0" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default MarketIndexEle;