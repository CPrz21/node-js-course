import { CronService } from './cron/cron-service';

export class Server {
  public static start() {
    console.log('Server started!!!');

    CronService.createJob('*/2 * * * * *', () =>
      console.log('cron job executed')
    );
  }
}
