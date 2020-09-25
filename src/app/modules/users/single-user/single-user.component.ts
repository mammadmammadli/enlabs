import { Component, Inject, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITag } from 'src/app/models/tag';
import { IUser } from 'src/app/models/user';
import { TagService } from 'src/app/services/tag.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: IUser,
    private tagService: TagService,
    private userService: UserService,
  ) { }

  tags: ITag[] = []

  ngOnInit(): void {
    this.tagService.getAll().subscribe(tags => {
      this.tags = tags
    })
  }

  isUserHasTag (tagId: number): boolean {
    if (this.user.tags.find(tag => tag.id === tagId)) return true
    return false
  }

  remove(tag: ITag) {
    this.userService.removeTag({
      tagId: tag.id,
      userId: this.user.id
    }).subscribe(() => {
      this.user.tags = this.user.tags.filter(_tag => _tag.id != tag.id)
    })
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const tagId = event.option.value

    this.userService.addTag({
      tagId,
      userId: this.user.id
    }).subscribe(() => {
      this.user.tags.push(this.tags.find(tag => tag.id == parseInt(tagId)))
    })
  }
}
