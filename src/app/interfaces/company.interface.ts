import { IAgentInfo, IRecord } from '.';

export interface ICompany {
	agentInfo: IAgentInfo;
	records: IRecord[];
	showContactInfo: boolean;
	role: string;
}
