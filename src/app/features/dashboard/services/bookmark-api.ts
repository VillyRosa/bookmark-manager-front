import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bookmark} from '@features/dashboard/models/bookmark';

@Injectable({
  providedIn: 'root',
})
export class BookmarkApi {
  private http = inject(HttpClient);

  public getAll(): Bookmark[] {
    const bookmarks = localStorage.getItem('bookmarks') as Bookmark[] | null;
    return bookmarks ?? [];
  }

  public getById(id: string): Bookmark | null {
    return null;
  }
}
