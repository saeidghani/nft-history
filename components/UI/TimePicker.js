import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import RCTimePicker from 'rc-time-picker';

function TimePicker() {
  const format = 'h:mm A';

  const now = moment().hour(0).minute(0);

  function onChange(value) {
    console.log(value && value.format(format));
  }

  return (
    <div className="relative w-full">
      <RCTimePicker
        showSecond={false}
        defaultValue={now}
        className="pointer-events-auto"
        onChange={onChange}
        format={format}
        use12Hours
        inputReadOnly
        allowEmpty={false}
        style={{ height: 56, width: '100%' }}
      />
      <div className="absolute top-3 right-4">
        <Image src="/icons/clock.svg" width={32} height={32} alt="" />
      </div>
    </div>
  );
}

export default TimePicker;
