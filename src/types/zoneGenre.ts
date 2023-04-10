// the purpose of this is to prevent the user from moving a candidate from  the
// destination (rejected or accepted) to the source (initial), since the user
//  should choose whether to accept or reject a candidate

export const zoneGenres: Record<any, ZoneGenre> = {
	SOURCE: 'source',
	DESTINATION: 'destination',
}

export type ZoneGenre = 'source' | 'destination'
