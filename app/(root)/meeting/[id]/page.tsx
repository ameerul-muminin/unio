import React from "react";

const Meeting = async ({ params }: { params: Promise<{ id: string }> }) => {
    return <div>Meeting #{(await params).id}</div>;
};

export default Meeting;
