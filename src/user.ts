import { renderBlock } from './lib.js'

export function renderUserBlock(name: string, avatarLink: string, favoriteItemsAmount: number) {
  const items: number | string = Boolean(favoriteItemsAmount) ? favoriteItemsAmount : 'ничего нет';

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarLink}" alt="Wade Warren" />
      <div class="info">
          <p class="name">$${name}</p>
          <p class="fav">
            <i class="heart-icon${Boolean(favoriteItemsAmount)} ? ' active' : ''}"></i>${items}
          </p>
      </div>
    </div>
    `
  )
}
