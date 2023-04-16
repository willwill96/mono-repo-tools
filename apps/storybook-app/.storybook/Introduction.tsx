import React from 'react'
import pkgJson from './package.json?raw'
import readme from '../README.md?raw'
const Introduction = () => (
    <div>
        {readme}
      <h1 style={{ fontSize: 50 }}>Welcome!</h1>
      <p style={{ fontSize: 32, padding: 16 }}>
        This is the homepage {pkgJson} of the{" "}
        <a href="https://www.github.com/willwill96/mono-repo-tools">
          mono-repo-tools github repository.
        </a>
        <br />
        <br />
        The goal offsf this repo is to create packages to assist in building &
        maintaining mono-repos.
        <br />
        <br />
        See available packages on the left hand sidebar. Press S, or tap the
        Sidebar at the bottom of the screen if you don&apos;t see the sidebar.
      </p>
    </div>
  );
export default Introduction