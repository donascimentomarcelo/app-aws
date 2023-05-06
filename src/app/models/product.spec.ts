import { Author } from './author';
import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    const author = new Author(
      1,
      1,
      '05-05-2023',
      '05-05-2023',
      'Kyle',
      'Crane',
      'photo.jpg'
    );
    expect(
      new Product(
        1,
        1,
        '05-05-2023',
        '05-05-2023',
        'Spring Training',
        'Spring Boot + Hibernate',
        'Full training about spring boot',
        author,
        100
      )
    ).toBeTruthy();
  });
});
