export type IDX = {
    dt: string,
	val: number,   // value
	d_pt: number,  // 증감량
	d_pct: number, // 증감률
	grf: [{ dt: string, val: number }] // graph
}

export type marketIndexType = {
    edrt100: IDX,  // 이데리 100지수
    edri: IDX,     // 이데리 동향지수
    ecsi: IDX,     // 이커머스 동향지수
    csi: IDX       // 소비자 동향지수
}