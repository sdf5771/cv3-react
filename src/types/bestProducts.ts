export type PRODUCT = {
	prod_id: string,     // 상품 ID
	prod_title: string,  // 상품명
	prod_url: string,    // 상품페이지 URL
	prod_img: string,    // 상품이미지 URL
	prod_pr: number,     // 상품 가격
	prod_df?: number,    // 배송비
	rv_cnt: number,      // 리뷰 개수
	rv_sum: number,      // 리뷰 점수 합계
	opt_cnt?: number,    // 옵션 개수
	sto_id: string,      // 판매처 ID
	sto_name: string,    // 판매처 이름
	sto_url?: string,    // 판매처 사이트 URL
	upd_ts: string,  // 업데이트된 시간
	
	sa_avg: number,      // 매출 평균
	sa_max: number,      // 매출 최대
	sa_sum: number,      // 매출 합계
	sc_avg: number,      // 판매량 평균
	sc_max: number,      // 판매량 최대
	sc_sum: number,      // 판매량 합계
	pct: number          // 백분위
}

export type bestProducts = [PRODUCT]