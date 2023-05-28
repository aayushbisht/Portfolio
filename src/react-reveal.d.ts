declare module 'react-reveal/Fade' {
    export interface FadeProps {
      duration?: number;
      delay?: number;
      fraction?: number;
      collapse?: boolean;
      ssrFadeout?: boolean;
      when?: boolean;
      opposite?: boolean;
      spy?: any;
      onReveal?: () => void;
      onOpposite?: () => void;
    }
  
    const Fade: React.FunctionComponent<FadeProps>;
  
    export default Fade;
  }

  declare module 'react-reveal/Pulse' {
    export interface PulseProps {
      count?: number;
      duration?: number;
      delay?: number;
      forever?: boolean;
      opposite?: boolean;
      when?: boolean;
      spy?: any;
      onReveal?: () => void;
      onOpposite?: () => void;
    }
  
    const Pulse: React.FunctionComponent<PulseProps>;
  
    export default Pulse;
  }
  declare module 'react-reveal/Zoom' {
    export interface ZoomProps {
      delay?: number;
      duration?: number;
      fraction?: number;
      collapse?: boolean;
      ssrFadeout?: boolean;
      when?: boolean;
      opposite?: boolean;
      spy?: any;
      onReveal?: () => void;
      onOpposite?: () => void;
    }
  
    const Zoom: React.FunctionComponent<ZoomProps>;
  
    export default Zoom;
  }
    