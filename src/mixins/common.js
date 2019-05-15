export const common = {
    methods: {
        bootstrapConfirm(data) {
            this.$bvModal
                .msgBoxConfirm("Are you sure?")
                .then(value => {
                    console.log(value);
                    if (value === true)
                    this.jsonData.children = this.jsonData.children.filter(obj1 => {
                        return obj1.id !== data.id;
                      });
                    
                })
                .catch(err => {
                    console.log(err);
                    return false;
                });
        }
    }
}