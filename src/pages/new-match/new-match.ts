import { Component } from "@angular/core"
import { NavController, ToastController, AlertController, ModalController, NavParams } from 'ionic-angular';

import { RecordResultPage } from '../record-result/record-result';
import { PlayerCreatePage} from '../player-create/player-create';
import { TeamSelectPage} from '../team-select/team-select';

import { MatchServiceProvider } from '../../providers/match-service/match-service';
@Component({
  selector: 'page-new-match',
  templateUrl: 'new-match.html'
})

export class NewMatchPage {
  gameRule:string;
  tournament: any;
  tournamentName: string;
  matches:any[] = [];
  players: any[] = [];
  teamsModal: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public matchService:MatchServiceProvider,
              public modalCtrl: ModalController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController) {
                // 默认BO1
                this.matches.push({ index: 1});
                this.gameRule = "BO1";
              }

  gameRuleChagne(data:string) {
    console.log("select change", data);
    let matchLength = Number(data.slice(2));
    this.matches = [];
    for(let i = 0; i < matchLength; i++) {
      this.matches.push({
        index: i+1
      });
    }
  }

  // 添加选手1
  selectPlayer1() {
    this.navCtrl.push(PlayerCreatePage);
  }
  // 添加选手2
  selectPlayer2() {
    this.navCtrl.push(PlayerCreatePage);
  }

  // 选择球队
  selectTeam() {
    console.log("选择球队");
    this.teamsModal = this.modalCtrl.create(TeamSelectPage);
    this.teamsModal.present();
  }

  // 添加新的比赛纪录
  addNewMatch() {
    console.log("添加新的比赛纪录");
  }

  getProfileImageStyle() {
    console.log("获取选手的头像");
  }

  inputPlayerID() {
    // this.navCtrl.push(PlayersPreparePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Player Login page.');
  }

  ionViewWillEnter() {
    //获取赛事信息
    this.tournament = this.navParams.get("tournament");
    this.tournamentName = this.tournament.name;
    // var data = this.matchService.getMatchInfo();
    // console.log("enter: ", data.players);
    // this.players = data.players;
    console.log(this.players);
  }

  // 记录比赛详细数据
  onRecordResult() {
    console.log("详细记录比赛数据");
    this.navCtrl.push(RecordResultPage);
  }

  // 确认是否保存数据
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }
}