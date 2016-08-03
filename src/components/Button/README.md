Simple Flat Button

    <div>
        <Button label="normal" />
        <Button label="primary" primary={true} />
        <Button label="secondary" secondary={true} />
        <Button label="disabled" disabled={true} />
    </div>
    
Simple Raised Button

    const style = { margin: 12 };
    
    <div>
        <Button type="raised" label="normal" style={style} />
        <Button type="raised" label="primary" primary={true} style={style} />
        <Button type="raised" label="secondary" secondary={true} style={style} />
        <Button type="raised" label="disabled" disabled={true} style={style} />
    </div>
    

Simple Floating Action Button

    const IconAdd = require('material-ui/svg-icons/content/add').default;
    const style = { marginRight: 12 };
    
    <div>
        <Button type="floatingAction" style={style}>
            <IconAdd />
        </Button>
        <Button type="floatingAction" style={style} mini={true}>
            <IconAdd />
        </Button>
        <Button type="floatingAction" secondary={true} style={style}>
            <IconAdd />
        </Button>
        <Button type="floatingAction" secondary={true} style={style} mini={true}>
            <IconAdd />
        </Button>
        <Button type="floatingAction" disabled={true} style={style}>
            <IconAdd />
        </Button>
        <Button type="floatingAction" disabled={true} style={style} mini={true}>
            <IconAdd />
        </Button>
    </div>
    
