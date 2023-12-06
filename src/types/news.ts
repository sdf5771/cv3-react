export type NEWS = {
	_id: string,        // 뉴스 ID
	title: string,
	link: string,       // 뉴스 URL
	hits: number,       // 조회수
	pub_ts: string,  // 작성일자
}

export type news = [NEWS]