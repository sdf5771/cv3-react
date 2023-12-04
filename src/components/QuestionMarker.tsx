import React from 'react';
import {Question} from 'assets/svg-components';
import styles from './QuestionMarker.module.css';
import TooltipBox from './TooltipBox';

function QuestionMarker(){
    return (
        <div className={styles.marker_container}>
            <Question width={24} height={24} />
            {/* <TooltipBox text='이데리의 샘플 데이터를 활용해 이커머스 시장의 추이를 볼 수 있습니다.' isUseCloseBtn={true}/> */}
        </div>
    )
}

export default QuestionMarker;