import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

interface IExperience{
  yearRange:string,
  title:string,
  company:string,
  desc:string
}

interface ISkills{
  percentage:string,
  name:string,
  desc:string
}

@Component({
  selector: 'app-credintials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credintials.component.html',
  styleUrls: ['./credintials.component.css']
})

export class CredintialsComponent implements OnInit {

  experiences:IExperience[]= [
    {
      yearRange: '2007 - 2017',
      title: 'Framer Designer & Developer',
      company: 'Bluebase Designs',
      desc: 'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim ' +
        'praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim' +
        ' diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.'
    },
    {
      yearRange: '2007 - 2017',
      title: 'Framer Designer & Developer',
      company: 'Bluebase Designs',
      desc: 'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim ' +
        'praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim' +
        ' diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.'
    }
  ]
  studies:IExperience[]=[
    {
      yearRange:'2004 - 2007',
      title:'Bachelor Degree in Psychology',
      company:'University of California',
      desc:'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim ' +
        'praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim ' +
        'diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.'
    },
    {
      yearRange:'2004 - 2007',
      title:'Bachelor Degree in Psychology',
      company:'University of California',
      desc:'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim ' +
        'praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim ' +
        'diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.'
    },
  ]
  skills:ISkills[]=[
    {
      percentage:'75%',
      name:'Angular',
      desc:'Non enim praesent'
    },
    {
      percentage:'60%',
      name:'Java Spring Boot',
      desc:'Non enim praesent'
    },
    {
      percentage:'50%',
      name:'.Net Core',
      desc:'Non enim praesent'
    },
    {
      percentage:'75%',
      name:'TypeScrypt',
      desc:'Non enim praesent'
    },
    {
      percentage:'60%',
      name:'Java',
      desc:'Non enim praesent'
    },
    {
      percentage: '50%',
      name: 'C#',
      desc: 'Non enim praesent'
    },
  ]

  ngOnInit() {
    window.scroll(0, 1)
  }

}
