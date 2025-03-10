import { select$ } from '@angular-redux-ivy/store';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const MAX_COMMENT_CHARS = 300;

export const charsLeft = (obs: Observable<string>): Observable<number> =>
  obs.pipe(
    map((comments) => comments || ''),
    map((comments) => MAX_COMMENT_CHARS - comments.length),
  );

@Component({
  selector: 'zoo-feedback-form',
  templateUrl: './page.html',
  styleUrls: ['./page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackFormComponent {
  @select$(['feedback', 'comments'], charsLeft)
  readonly charsLeft!: Observable<number>;

  getMaxCommentChars = () => MAX_COMMENT_CHARS;
}
