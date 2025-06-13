import useWindowWidth from '../hooks/useWindowWidth';
import DesktopUI from '../pages/DesktopUI';
import MobileUI from '../pages/MobileUI';

function ResponsiveComponent() {
  const width = useWindowWidth();

  return (
    <div>
        <br/><br/>
        <p>Responsive Check</p>
        <p>현재 화면 너비: {width}px</p>
        {width > 768 ? <DesktopUI /> : <MobileUI />}
    </div>
  );
}

export default ResponsiveComponent;