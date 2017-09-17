// Scripts order
// pop_up_utils
// d3.min (d3 visualization library)
// visualization
// * browser_action.js

const exampleData = {
  depth: 10,
  width: 20,
  root: {
    url: 'http://www.example.com/moo/foo/bar',
    title: 'Foos bars and the bar foods',
    children: [
      {
        url: 'http://www.ixce.cods/mar/pars',
        title: 'Ice DOgs 12098 12980 1928 ',
        children: [
          {
            url: 'http://www.ixce.cods/mar/pars',
            title: 'Ice DOgs 12098 12980 1928 ',
            children: []
        },
          {
            url: 'http://www.ixce.cods/mar/pars',
            title: 'Ice DOgs 12098 12980 1928 ',
            children: []
        },
      ]
    },
      {
        url: 'http://www.ixce.cods/mar/pars',
        title: 'Ice DOgs 12098 12980 1928 ',
        children: [
          {
            url: 'http://www.ixce.cods/mar/pars',
            title: 'Ice DOgs 12098 12980 1928 ',
            children: [
              {
                url: 'http://www.ixce.cods/mar/pars',
                title: 'Ice DOgs 12098 12980 1928 ',
                children: [
                  {
                    url: 'http://www.ixce.cods/mar/pars',
                    title: 'Ice DOgs 12098 12980 1928 ',
                    children: [
                      {
                        url: 'http://www.ixce.cods/mar/pars',
                        title: 'Ice DOgs 12098 12980 1928 ',
                        children: [
                          {
                            url: 'http://www.ixce.cods/mar/pars',
                            title: 'Ice DOgs 12098 12980 1928 ',
                            children: []
                        },
                          {
                            url: 'http://www.ixce.cods/mar/pars',
                            title: 'Ice DOgs 12098 12980 1928 ',
                            children: []
                        },
                      ]
                    },
                  ]
                },
                  {
                    url: 'http://www.ixce.cods/mar/pars',
                    title: 'Ice DOgs 12098 12980 1928 ',
                    children: []
                },
              ]
            },
          ]
        },
          {
            url: 'http://www.ixce.cods/mar/pars',
            title: 'Ice DOgs 12098 12980 1928 ',
            children: [
              {
                url: 'http://www.ixce.cods/mar/pars',
                title: 'Ice DOgs 12098 12980 1928 ',
                children: [
                  {
                    url: 'http://www.ixce.cods/mar/pars',
                    title: 'Ice DOgs 12098 12980 1928 ',
                    children: []
                },
                  {
                    url: 'http://www.ixce.cods/mar/pars',
                    title: 'Ice DOgs 12098 12980 1928 ',
                    children: [
                      {
                        url: 'http://www.ixce.cods/mar/pars',
                        title: 'Ice DOgs 12098 12980 1928 ',
                        children: [
                          {
                            url: 'http://www.ixce.cods/mar/pars',
                            title: 'Ice DOgs 12098 12980 1928 ',
                            children: []
                        },
                          {
                            url: 'http://www.ixce.cods/mar/pars',
                            title: 'Ice DOgs 12098 12980 1928 ',
                            children: [
                              {
                                url: 'http://www.ixce.cods/mar/pars',
                                title: 'Ice DOgs 12098 12980 1928 ',
                                children: [
                                  {
                                    url: 'http://www.ixce.cods/mar/pars',
                                    title: 'Ice DOgs 12098 12980 1928 ',
                                    children: []
                                },
                                  {
                                    url: 'http://www.ixce.cods/mar/pars',
                                    title: 'Ice DOgs 12098 12980 1928 ',
                                    children: []
                                },
                              ]
                            },
                          ]
                        },
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        },
      ]
    },
  ]
  }
}


// This is the starting point for the 'main' action
// We first get the active tab when the the browser_action button is clicked
getActiveTab(activeTab => {
  // Once we've recieved the tab, we can then ask the background task for the tab's tree
  chrome.extension.sendMessage({
      from: sender,
      action: 'get-tree',
      data: {
        tab: activeTab
      }
    },
    (getTreeResponse) => {
      // console.log('getTreeResponse', getTreeResponse);
      // Set up the canvas, given the depth and leaves of the tree
      // const histreeVisualization = new HistreeVisualization(getTreeResponse.depth,
      //   getTreeResponse.width);
      //
      // histreeVisualization.drawTree(getTreeResponse.root);
      const histreeVisualization = new HistreeVisualization(exampleData.depth,
        exampleData.width);

      // setTimeout(() => {
      // console.log('equals?', JSON.stringify(getTreeResponse) === JSON.stringify(exampleData))
      histreeVisualization.drawTree(exampleData.root);
      // }, 100);
    });
});
