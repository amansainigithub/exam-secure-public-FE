import { Component, OnInit } from '@angular/core';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { BranchService } from 'src/app/_services/categoryServices/branch-service/branch.service';
import { RootServiceService } from 'src/app/_services/categoryServices/root-service/root-service.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category-service/sub-category.service';


declare var Tesseract:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Editor = ClassicEditorBuild;

  constructor(private _bs:BranchService,private _scs:SubCategoryService,private _rcs:RootServiceService) { 
    // this.test();
  }

  ngOnInit(): void {
    //branch-list
    this.getBranchList();

    // subCategoryList
    this.getSubCategoryList();

    //RootCategory
    this.getRootCategoryList();
  }

  branchList:any;
  getBranchList()
  {
    this._bs.getBranchList().subscribe(data=>{
      this.branchList = data;
      console.log(data);
      console.log(data);
      
    },error=>{
      console.log(error);
      
    })
  }

  subCategoryList:any;
  getSubCategoryList()
  {
    this._scs.getSubCategoryList().subscribe(data=>{
      this.subCategoryList = data;
      console.log(data);
      
    },error=>{
      console.log(error);
      
    })
  }


  rootList:any;
  getRootCategoryList()
  {
    this._rcs.getRootCategoryService().subscribe(data=>{
      this.rootList = data;
      console.log(data);
      
    },error=>{
      console.log(error);
      
    })
  }





  // public tools: object = {
  //   items: [
  //          'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
  //          'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
  //          'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
  //          'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
  //          'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
  //          'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  //  };

  // test(){
  //   Tesseract.recognize('../../../assets/home-page/img.png').then(function(result:any){         
  //     alert(result.text);      
  //     });    
  // }  





}

