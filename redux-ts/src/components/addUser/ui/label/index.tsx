import React from 'react';
import { LabelUserType } from '../../types';

const UserLabel = () => {
  return (
    <label className={LabelUserType.CLASS} htmlFor={LabelUserType.HTML_FOR}>
      Search name
    </label>
  );
};

export default UserLabel;
