// The HistreeStorage class has methods for accessing the the stored histrees
class HistreeStorage {

  constructor() {
    // The rootsDict is where we will store
    this.rootsDict = {
      // tabId: tree
    };
  }

  insertNodeIntoTreeByTabId(node, tabId) {
    // Ensure that the node has a children array
    node.children = node.children || [];

    // If this tab does not yet have a tree
    if (!(tabId in this.rootsDict)) {
      // Create a new tree for the tab
      this.rootsDict[tabId] = {
        root: node,
        currentNode: node
      }
    }
    // Else if the tab already has a tree
    else {
      console.log('this.rootsDict', this.rootsDict);
      var visitedNode = treeHasVisited(this.rootsDict[tabId].root, node);

      // If the node is already in the tree
      if (visitedNode) {
        // Set the node to be the current node
        this.rootsDict[tabId].currentNode = visitedNode;
      }
      else {
        // Else add the node as a child of the current node
        this.rootsDict[tabId].currentNode.children.push(node);
        // and set the current node to the new page
        this.rootsDict[tabId].currentNode = node;
      }
    }
  }

  getHistreeForTabId(tabId) {
    return this.rootsDict[tabId];
  }
}
