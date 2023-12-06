export type POST = {
	post_id: string,    // 커뮤니티 글 ID
	type: number,       // 1: 공지, 2: 구인, 3: 질문, 4: 홍보, 5: 자유, 6: 분석
	title: string,
	hits: number,       // 조회수
	cmts: number,      // 댓글수
	reg_ts: string, // 작성일자
}

export type community = [POST]