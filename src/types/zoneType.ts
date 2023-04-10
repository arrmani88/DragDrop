export const zoneTypes: Record<any, ZoneType> = {
	INITIAL_ZONE: 'initialZone',
	ACCEPTED_ZONE: 'acceptedZone',
	REJECTED_ZONE: 'rejectedZone'
};

export type ZoneType = 'acceptedZone' | 'rejectedZone' | 'initialZone'