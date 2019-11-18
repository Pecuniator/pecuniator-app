import { AccountReport } from 'camtts/dist/types/AccountReport';
import { Account } from 'camtts/dist/types/Report';
import { Entry } from 'camtts/dist/types/Entry';
declare class PAccount implements PecuniatorAccount {
    private account;
    constructor(account: Account);
    get currency(): string | null | undefined;
}
declare class PEntry implements PecuniatorEntry {
    private entry;
    constructor(entry: Entry);
    get reference(): string | null | undefined;
    get amount(): string | null | undefined;
    get currency(): string | null | undefined;
    get bookingDate(): string | null | undefined;
    get creditorIBAN(): string | null | undefined;
    get debitorIBAN(): string | null | undefined;
    get creditordebit(): string | null | undefined;
    get additionalEntryInfo(): string | null | undefined;
}
/**
 * Main entry point of API
 */
declare class PecuniAPI implements Pecuniator {
    reports: Array<AccountReport>;
    constructor();
    load(data: string): void;
    get accounts(): PAccount[];
    get entries(): PEntry[];
}
export = PecuniAPI;
