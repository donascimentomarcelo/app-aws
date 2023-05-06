import { Author } from './author';

describe('Author', () => {
  it('should create an instance', () => {
    expect(
      new Author(1, 1, '05-05-2023', '05-05-2023', 'Kyle', 'Crane', 'photo.jpg')
    ).toBeTruthy();
  });
});
