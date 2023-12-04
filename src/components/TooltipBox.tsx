import React from 'react';
import { TooltipClose } from 'assets/svg-components';
import styles from './TooltipBox.module.css';

type Tprops = {
    text: string,
    isUseCloseBtn: boolean,
}

function TooltipBox({text, isUseCloseBtn}: Tprops){
    return(
        <div className={styles.tooltip_box_root}>
            <div className={styles.tooltip_box}>
                <span className={styles.tootip_text}>{text}</span>
                {isUseCloseBtn ? <div style={{width: 16, height: 16, cursor: 'pointer'}}><TooltipClose width={16} height={16}/></div> : null}
            </div>
        </div>
    )
}

export default TooltipBox;