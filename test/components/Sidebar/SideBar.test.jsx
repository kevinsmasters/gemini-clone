import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import SideBar from '../../../src/components/SideBar/SideBar'

test('menu expands when clicked on', async ()=> {

  render(<SideBar />)

  const menuIcon = screen.getByAltText('menu toggle');

  expect(menuIcon).toHaveProperty('src','/src/assets/menu_icon.png');

})