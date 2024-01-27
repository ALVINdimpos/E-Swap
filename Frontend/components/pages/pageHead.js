// PageHead.js
import componentstyles from '../../styles/module.css/components.module.css';

export default function PageHeadLayout({children}) {
    return (
        <div className={componentstyles.pageHead}>
            {children}
        </div>
    );
};

