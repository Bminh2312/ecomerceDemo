import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, UncontrolledDropdown } from 'reactstrap'
import { AppContext } from '../../AppProvider';

export default function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed)
  const {cart} = useContext(AppContext)
  return (
    <div>
    <Navbar color='faded' light expand='md'>
      <NavbarBrand href="/" className='me-3'>reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className='me-2' />
      <Collapse isOpen={!collapsed} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink to='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/product'>
              Product
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
      <Link to="/cart">Cart <span>{cart.length}</span></Link>
    </Navbar>
    
  </div>
  )
}
