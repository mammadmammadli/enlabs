import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';
import { NewtagComponent } from './newtag/newtag.component';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  constructor(private tagService: TagService, public dialog: MatDialog) { }
  
  tags: ITag[] = []

  ngOnInit(): void {
    this.tagService.getAll().subscribe(tags => {
      this.tags = tags;
    })
  }

  openNewTag() {
    const newTagRef = this.dialog.open(NewtagComponent, {
      height: '300px',
      width: '300px',
    })

    newTagRef.afterClosed().subscribe((data: ITag) => {
      this.tags.push(data)
    })
  }

  onClick(id: number) {
    this.tagService.remove(id).subscribe(() => {
      this.tags = this.tags.filter(tag => tag.id !== id)
    })
  }

}
